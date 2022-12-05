import styled from "styled-components";
import React from "react";

// // styling
const Container = styled.section`
 flex: 1;
   margin:10px;
   height: 70vh;
   position: relative;
`;
// // sahhil is a killadi div
// const FirstDiv = styled.div`
//   border: 1px solid black;
//   background-color: white;
//  width: 700px;
//  height: 500px;

// `;
// // love you bro div
// const SecondDiv = styled.div`
//   background-color: white;
//  width: 600px;
//  height: 270px;
//   border: 1px solid black;
//  margin-left: 10px;
//  margin-bottom: 10px;

//   `;
//   // what the heck
// const ThirdDiv = styled.div`
//   background-color: white;
//   border: 1px solid black;
//   width: 300px;
//   height: 220px;
//   margin-left:10px ;
//   margin-right:10px ;
//   `;
//   // leomessi
// const FourthDiv = styled.div`
// border: 1px solid black;
// background-color: white;
// width: 300px;
//   height: 220px;

// `
// const FlexContainer=styled.div`
//   display: flex;
//   flex-direction: column;

// `
// const SecondFlex=styled.div`
//    display: flex;
//    flex-direction: row;
// `

 const Image=styled.img`
    width: 100%;
  height: 100%;
  object-fit: cover;
 `
 const Info=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 `
 const Title=styled.div`
    color: white;
    margin-bottom: 20px;
 `
 const Button=styled.div`
   border: none;
   padding: 10px;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 600;
 `
const CategoryItem = ({item}) =>{
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW NOW</Button>
      </Info>
      {/* <FirstDiv>
      <h2>shahil is a killadi</h2>
      </FirstDiv>
      <FlexContainer>
      <SecondDiv>
      <h2>love you bro</h2>

      </SecondDiv>
      <SecondFlex>

      <ThirdDiv>
      <h2>what the heck</h2>

      </ThirdDiv>
      <FourthDiv>
      <h2>lwo messii</h2>

      </FourthDiv>
      </SecondFlex>
      </FlexContainer> */}
    </Container>
  );
}

export default CategoryItem;
