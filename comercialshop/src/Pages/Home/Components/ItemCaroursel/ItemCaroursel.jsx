
import PropTypes from 'prop-types';
import TextLeftDeco from './Components/TextDecorationLeft/TextLeftDeco';

const ItemCaroursel = props => {
    // const { id, src } = props;

    return (
        <div style={{
            // backgroundImage: `url(${'http://dummyimage.com/1766x700.jpg/dddddd/000000'})`,
            backgroundColor: '#E5DFCA',
            width: '100%',
            height: '700px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <TextLeftDeco/>
        </div>
    )
}

ItemCaroursel.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
}

export default ItemCaroursel
