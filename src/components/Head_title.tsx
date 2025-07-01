type Props = {
    title: String;
}

function Head(Prop: Props) {
    return (
        <>
            <title>{Prop.title}</title>
        </>
    )
}

export default Head;
