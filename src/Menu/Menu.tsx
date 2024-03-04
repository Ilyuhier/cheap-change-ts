import MenuItem from "./MenuItem"

export default function Menu({menuArray}: any){
  const menuList = menuArray.map((e :string)=><MenuItem key={e} item={e}/>)
  // console.log(typeof(menuArray))
  
  
  return(
    <ul>
      {menuList}
    </ul>
  )
}