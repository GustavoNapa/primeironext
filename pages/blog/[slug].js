export async function getServerSideProps(context){
    const slug = context.query.slug

    return {
        props: {
            slug: slug
        }
    }
}

const slug = (props) => {
    return(
        <div>Seu slug é {props.slug}</div>
    )
}

export default slug;