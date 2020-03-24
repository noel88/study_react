import React from "react";
import Aux from "../../hocks/AuxHoc";
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 16px;
`;


const layout = (props) => {
    return (
        <Aux>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <Content>
                {props.children}
            </Content>
        </Aux>
    )
};





export default layout;
