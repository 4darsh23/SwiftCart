export default function Header () {
const menuList = [
   {
    name : "home",
    link : "/",
   },{
    name : "About us",
    link : "/about-us",
   },{
    name : "Contact us",
    link : "/contact-us",
   }
]

    return (
        <nav className="py-3 px-20 border-b flex items-center justify-between" >
            <img className="h-20" src="/logo.png" alt="" />  
            <div className="flex gap-4 items-center font-semibold">
                {menuList?.map((item)=>{
                    return (
                     <a href={item?.a}>
                        <button>
                            {item?.name}
                        </button>

                    </a>
                    );

                })}             
            </div>
            <a href={"/login"}>
            <button className="bg-blue-400 px-3 py-1 rounded-full text-white">
                Login
            </button>
            
            </a>
        </nav>
    )
}