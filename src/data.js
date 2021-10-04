const data = [{
    id:1,
    type: "Components",
    icon: <i className="fas fa-fw fa-cog"></i>,
    paths:"/component",
    subs:"custom components",
    submenu: [{subtype: "Cards",path:"/cards"},{subtype: "Button",path: "/component/buttons"}]
},
    {
    id:2,
    type: "Utilities",
    icon: <i className="fas fa-fw fa-wrench"></i>,
        subs: "custom utilities",
    paths:"/utilities",
    submenu: [{ subtype: "Colors", path: "/utilities/colors" }, { subtype: "Borders", path: "/utilities/border" },{subtype:"Animation",path:"/utilities/animation"},{subtype:"other",path:"/utilities/others"}]
    }, {
    id: 3,
    type: "Pages",
    icon: <i className="fas fa-fw fa-folder"></i>,
    subs: "Login Screens",
    paths:"/login",
    submenu:[{subtype:"Login",path:"#"},{subtype:"Register",path:"#"},{subtype:"Forget",path:"#"},{subtype:"Forgot Password"}]
    },
    {
        id: 4,
        type: "Charts",
        icon: <i className="fas fa-fw fa-chart-area"></i>,
        paths:"/chart",
        // submenu: [{subtype:"yes", path: "/charts/chart" }]
        
    }, {
        id: 5,
        type: "Table",
        icon: <i className="fas fa-fw fa-table"></i>,
        paths:"/table",
        // submenu:[{subtype:"no", path:"/table"}]
}]

export default data;