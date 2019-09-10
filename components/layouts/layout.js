import Link from 'next/link'
import Head from 'next/head'

export default class extends React.Component {
  static defaultProps = {
    title: 'hello!',
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>{'header'}</header>

        { this.props.children }

        <footer>{'footer'}</footer>
      </div>
    )
  }
}
