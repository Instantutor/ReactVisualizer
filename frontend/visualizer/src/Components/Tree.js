import PropTypes from 'prop-types'
import Node from './Node.js'

const Tree = ({title}) => {

  return (
    <Tree className='Tree'>
        <Node color='black' nodeName='Base' parent='none'/>
    </Tree>
  )
}

Tree.defaultProps = {
    title: 'Visualizer Tree Start',
}

Tree.propTypes = {

    title: PropTypes.string.isRequired,
}

export default Tree