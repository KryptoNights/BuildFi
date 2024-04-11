import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import WrapperCards from '../../../components/WrapperCard/WrapperCards'
import Layout from '../../../components/Layout/Layout'

const index = () => {
  return (

    <Layout>
    <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'auto',justifyContent:'space-between'}}>
     <Navbar/>
     <WrapperCards/>
    </div>
     </Layout>
  )
}

export default index