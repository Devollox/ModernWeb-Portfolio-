import Head from '@components/head'
import Header from '@components/header'
import styles from './page.module.css'

const Page = ({
  header = true,
  footer = true,
  title,
  description,
  image,
  style,
  showHeaderTitle = true,
  children
}) => {
  return (
    <div className={styles.wrapper} style={style}>
      <Head
        title={`${title ? `${title} - ` : ''}Devollox`}
        description={description}
        image={image}
      />

      {header && <Header title={showHeaderTitle && title} />}
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
