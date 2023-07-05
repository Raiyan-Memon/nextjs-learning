export default function moviecard(props: any) {
    return (
        <>
            <img
                src={props.imagepath}
                alt="Picture of the author"
                width="80%"
                height="80%"
            />
            <h6>{props.title}</h6>
        </>
    );
}