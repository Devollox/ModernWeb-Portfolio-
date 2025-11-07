import Page from '@components/page'
import { GameOfLife } from '@lib/gameoflife'
import Encoding from 'components/encoding'
import styles from './error.module.css'

const Error = ({ status, children }) => {
  Encoding(25, 'effects')
  GameOfLife()
  return (
    <div className={styles.wrapper_content}>
      <div id="Canvas"></div>
      <Page title={status || 'Error'} style={{ marginBottom: '0px' }}>
        {status === 404 ? (
          <div className={styles.wrapper_error_page}>
            <h>This page cannot be found.</h>

            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>
                It doesn’t exist, it never has. I’m nostalgic for a place that
                never existed.
              </p>

              <footer id="effects">— Aaron Swartz </footer>
            </blockquote>
          </div>
        ) : status === 400 ? (
          <>
            <h1>This page is under development.</h1>

            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>
                When I'm working on a task, I don't think about beauty. I only
                think about how to solve the problem. But when the finished
                solution doesn't look pretty, I know it's wrong.
              </p>

              <footer id="effects">— Buckminster Fuller </footer>
            </blockquote>
          </>
        ) : (
          <section className={styles.section}>
            <span>{status || '?'}</span>
            <p>An error occurred.</p>
          </section>
        )}
        <main>{children}</main>
      </Page>
    </div>
  )
}

export default Error
