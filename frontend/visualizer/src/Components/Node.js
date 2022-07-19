import PropTypes from 'prop-types'

const Node = ({color, nodeName, parent}) => {

  const onClick = () => {
    console.log('The parent of this node is ', parent)
  }

  return (

    <node onClick={onClick} style={{ backgroundColor: color}}>
      {nodeName}
    </node>

  )
}

Node.defaultProps = {
  color: 'black',
  nodeName: 'Default Node'
}

Node.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  parent: PropTypes.string,
}

export default Node