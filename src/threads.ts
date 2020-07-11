
import Octokit from '@octokit/rest'
import { REPO_OWNER, REPO_NAME } from './config'

const threadsCache = new Map<number, ThreadDetail>()

export interface ThreadDetail {
  /** thread id */
  tid: number;

  /** category id */
  cid: number;

  /** sub-category id */
  subCid: number;

  title: string;

  createTime: Date;
  updateTime?: Date;

  /** user id */
  uid: number;

  like: number;
  dislike: number;

  uniUserReply: number;

  replies: Reply[];
}

export interface Reply {
  /** post id */
  pid: string;

  /** thread id */
  tid: number;

  /** user id */
  uid: number;

  like: number;
  dislike: number;

  /** vote_score */
  score: number;

  quote?: Reply;

  /** no_of_quote */
  citedBy: number;

  replyTime: Date;

  msg: string;
}

export class ThreadDetail {
  private filePath: string

  private static baseurl: string = `https://cdn.jsdelivr.net/gh/${REPO_OWNER}/${REPO_NAME}`

  constructor (tid: number) {
    this.filePath = this.getFilePath(tid)
  }

  private getFilePath (tid: number | string) {
    tid = tid.toString()
    const lastDigit = tid[tid.length - 1]
    return `${lastDigit}/${tid}.json`
  }

  public async fetch () {
    try {
      const url = `${ThreadDetail.baseurl}/${this.filePath}`
      const response = await window.fetch(url, {
        cache: 'no-cache'
      })
      const json: ThreadDetail = await response.json()
      Object.assign(this, json)
      threadsCache.set(json.tid, this)
    } catch (err) {
      console.error(err)
    }

    return this
  }
}

const octokit = new Octokit()

export const listThreads = async function * () {
  const until = new Date().toISOString()

  let page = 1

  while (true) {
    try {
      const { data: commits } = await octokit.repos.listCommits({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        until,
        per_page: 1,
        page
      })

      const threads = commits.map((i) => {
        const message = i.commit.message // <ISO8601 string> update\n<tid>,<tid>,...
        const tidList = message.split('\n')[1].split(',')
        return tidList.map((tid) => {
          return getThread(+tid)
        })
      }).reduce((p, c) => p.concat(c), []) // flat()

      yield await Promise.all(
        threads
      )

      page++
    } catch (err) {
      console.error(err)
      yield []
    }
  }
}

export const getThreadFromCache = function (tid: number) {
  return threadsCache.get(tid)
}

export const getThread = async function (tid: number) {
  const thread = threadsCache.get(tid) // from cache
  if (thread) {
    return thread
  } else {
    return new ThreadDetail(tid).fetch()
  }
}
