import './Link.css';

function Link(props) {
    return (  
        <a href={props.url} className='link' id={props.id}>
            {props.text}
        </a>
    );
}

export default Link;