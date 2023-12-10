
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { lazy,Suspense } from "react"
// import { useDispatch } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../SheairModule/Header/Header';
import Footer from '../SheairModule/Footer/Footer';
import Login from '../Componend/Login/Login ';
import Rejistration from '../Componend/Rejistration/Rejistration';


// import Loder from '../SheairModule/Loder/Loder';


const Carousal = lazy(()=> import ("../Componend/Carousal/Carousal"));
const Home = lazy(() => import('../Componend/Home/Home'));
const Aboute = lazy(() => import("../Componend/About/About"));
const Blog = lazy(() => import("../Componend/Blog/Blog"));
const Contact = lazy(() => import("../Componend/Contact/Contact"));
const Service = lazy(() => import("../Componend/Service/Service"));
const Banner = lazy(()=>import("../Componend/Banne/Banner"));
const SomeAbout = lazy(()=> import("../Componend/SomeAbout/SomeAbout"));
const Blog2 = lazy(()=> import("../Componend/Blog2/Blog2"));
const Item = lazy(()=> import("../Componend/Item/Item"));
const Speacial = lazy(()=> import ("../Componend/Special/Speacial"));
const Pricing = lazy(()=> import("../Componend/Pricing/Pricing"));
const SomeCard = lazy(()=> import("../Componend/SomeCard/SomeCard"));
const AllSale = lazy(()=> import("../Componend/AllSale/AllSale"));
const BlogCard = lazy(()=> import("../Componend/BlogCard/BlogCard"));
const LastCard = lazy(()=> import("../Componend/LastCard/LastCard"));
const CrudTime = lazy(()=> import("../Componend/CrudTime/CrudTime"));
const Bar = lazy(()=> import("../Componend/Bar/Bar"));





export default function Rout() {
  // const dispatch = useDispatch();

  const PublicRouteName = [

    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/rejistration",
      component: <Rejistration />,
      
    },

  ];
  console.log(PublicRouteName);

  const PrivateRouteName = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/Carousal",
      element: <carousal/>,
    },
    {
      path: "/Aboute",
      component: <Aboute />,
    },
    {
      path: "/Blog",
      component: <Blog />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
    {
      path: "/Carousal",
      component: <Carousal />,
    },
    {
      path: "/Service",
      component: <Service />,
    },
    {
      path: "/banner",
      component: <Banner/>,
    },
    {
      path: "/SomeAbout",
      component: <SomeAbout/>,
    },
    {
      path: "/Blog2",
      component: <Blog2/>
    },
    {
      path: "/Item",
      component: <Item/>,
    },
    {
      path: "/Special",
      component: <Speacial/>,
    },
    {
      path: "/Pricing",
      component: <Pricing/>
    },
    {
      path: "/SomeCard",
      component: <SomeCard/>,
    },
    {
      path: "/Allsale",
      component: <AllSale/>,
    },
    {
      path: "./BlogCard",
      component: <BlogCard/>,
    },
    {
      path: "./LastCard",
      component: <LastCard/>,
    },
    {
      path: "/curdtime",
      component: <CrudTime/>,
    },
    {
      path: "/bar",
      component: <Bar/>,
    },
  
  ];

  function PrivateRoute({ children }) {

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
     console.log(token,"token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/Login" />
    );
  
  };
 

  return (
    <>
    <Suspense fallback={<h1>Hello</h1>}>
    <Router>
        <Header />
        <Routes>
          {PublicRouteName.map((CurrentValue, Index) => {
            return (
              <Route path={CurrentValue.path} element={CurrentValue.component} key={Index+1} />
            )
          })
          }

          {PrivateRouteName?.map((route, index) => {
              return (
                <Route key={index+2} path={route.path} element={<PrivateRoute> {route.component} </PrivateRoute>} 
                />
              )
            })
          }

        </Routes>
        <Footer />
      </Router>
    </Suspense>
    </>
  )
}
