import Information from '@components/information'
import List from '@components/list'
import ListIndex from '@components/list/list'
import Page from '@components/page'
import getPosts from '@lib/get-posts'

import {
  apps,
  coding,
  computer,
  desk,
  keyboard,
  microphone,
  mouse,
  services
} from '@data/computer.json'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}
const Uses = () => {
  return (
    <Page description="My config uses." title="Uses">
      <Information title="Tools. Apps. Gear.">
        I often change my computer and peripheral <strong>configuration</strong>
        . This is not a static page, it's a <strong>living document</strong>{' '}
        with everything that I'm using nowadays.
      </Information>
      <List listTitle="Computer">
        {computer.map(entry => {
          return (
            <ListIndex
              selection="-"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Desk">
        {desk.map(entry => {
          return (
            <ListIndex
              selection="-"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Mouse">
        {mouse.map(entry => {
          return (
            <ListIndex
              selection="-"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Keyboard">
        {keyboard.map(entry => {
          return (
            <ListIndex
              selection="-"
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Microphone">
        {microphone.map(entry => {
          return (
            <ListIndex
              selection="-"
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Coding">
        {coding.map(entry => {
          return (
            <ListIndex
              selection="-"
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Apps">
        {apps.map(entry => {
          return (
            <ListIndex
              selection="-"
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List listTitle="Services">
        {services.map(entry => {
          return (
            <ListIndex
              selection="-"
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
    </Page>
  )
}

export default Uses
