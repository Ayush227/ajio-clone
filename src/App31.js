import React from "react";
import Col from 'react-bootstrap/Col';
import { alignPropType } from "react-bootstrap/esm/types";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Ajio</Heading>
			<FooterLink href="#">Who We Are</FooterLink>
			<FooterLink href="#">join Our Team</FooterLink>
			<FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">We Respect Your Privacy</FooterLink>
            <FooterLink href="#">Fees & Payments</FooterLink>
            <FooterLink href="#">Returns & Refunds Policy</FooterLink>
            <FooterLink href="#">Promotion Terms & Conditions</FooterLink>
		</Column>
		<Column>
			<Heading>Help</Heading>
			<FooterLink href="#">Track Your Order </FooterLink>
			<FooterLink href="#">Frequently Asked Questions</FooterLink>
			<FooterLink href="#">Returns</FooterLink>
			<FooterLink href="#">Cancellations</FooterLink>
            <FooterLink href="#">Payments</FooterLink>
            <FooterLink href="#">Customer Care</FooterLink>
            <FooterLink href="#">How Do I Redeem My Coupon </FooterLink>
		</Column>
		<Column>
			<Heading>Shop by</Heading>
			<FooterLink href="#">Men</FooterLink>
			<FooterLink href="#">Women</FooterLink>
			<FooterLink href="#">Kids</FooterLink>
			<FooterLink href="#">Indie</FooterLink>
            <FooterLink href="#">Stores</FooterLink>
            <FooterLink href="#">New Arrivals</FooterLink>
            <FooterLink href="#">Brand Directory</FooterLink>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Collections</FooterLink>
		</Column>
		<Column>
			<Heading>Follow Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram-AJIOlife
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram-AJIO LUXE
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Pintrest
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		<hr style={{color:'white'}}/>
		<Row>
        <Col lg={8}><h7 style={{color:'white'}}>Payment methods</h7></Col>
      </Row>
		
		
	</Container>
	</Box>
);
};
export default Footer;
