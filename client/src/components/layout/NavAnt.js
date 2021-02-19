import React from "react";
import { Menu, Layout } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// const useStyles = makeStyles((theme) => ({

  
// }));

export default function NavAnt({currentUser}) {
  // const classes = useStyles();

  return (
   <Header>
        <Menu theme='Dark' mode='horizontal' >
       <Menu.Item>
          NSFW
     

       
          Tour
       

        
          Register
        

        
          Login
          </Menu.Item>
        

      </Menu>
      </Header>
    
  );
}
