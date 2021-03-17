export default function Footer(){
    return(
        <div className=" mt-4 pt-4 border-t-2 w-full absolute bottom-0">
        <div className="footer grid grid-cols-12">
            <div className="col-start-2 col-span-2">
                <div>Andorid Libre</div>
                <div>Argentina</div>
                <div>Email: dmoll217@gmail.com</div>
            </div>
            <div className="col-start-10 col-span-2">
                <h2>Sigueme en mis redes</h2>
                <div className="flex flex-row mt-2">
                    <div>
                    <a href="https://github.com/MollDiego" target="_blank"><img src="/github.svg"
                            alt="logo" width="30" height="30"/></a>
                    </div>
                    <div className="ml-4">
                    <a href="https://www.linkedin.com/in/diego-moll-34a52a183" target="_blank"><img src="/linkedin.svg"
                            alt="logo" width="30" height="30"/></a>
                    </div>
                    <div className="ml-4">
                    <a href="https://twitter.com/DiegoMoll3" target="_blank"><img src="/twitter.svg"
                            alt="logo" width="30" height="30"/></a>
                    </div>
                    <div className="ml-4">
                    <a href="https://www.instagram.com/diego_moll/" target="_blank"><img src="/instagram_WB.svg"
                            alt="logo" width="30" height="30"/></a>
                    </div>
                </div>                
            </div>
        </div>
        <div className="footer grid grid-cols-12">
            <span className="pt-4 pb-4 col-start-2 col-span-2">&copy;Copyright. All
                Rights Reserved
            </span>
            <div className="pt-4 pb-4 flex flex-row col-start-10 col-span-2">
            Developed with 
            <img src="/heart.svg" height="24px" width="24px" className="ml-2 mr-2"></img> by
            <a className="no-underline font-bold text-red-500 ml-2"
                    href="https://www.linkedin.com/in/diego-moll-34a52a183" target="_blank">Diego
                    Moll</a>
            </div>            
        </div>
    </div>
    )
}