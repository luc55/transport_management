import { Helmet } from 'react-helmet';


const PageHead = ({ headTitle }) => {
    return (
        <>
            <Helmet>
                <title>
                    {headTitle ? headTitle : "Transend | IT Solutions & Technology React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kumbh+Sans:wght@100..900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
        </>
    )
}

export default PageHead