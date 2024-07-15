import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Topbar = () => {
    return (
		<Container>
			<Content>
				<Logo>
					<a href="/feed">
						<img src="/images/home-logo.svg" alt="" />
					</a>
				</Logo>
				<Search>
					<div>
						<input type="text" placeholder="Search" />
					</div>
					<SearchIcon>
						<img src="/images/search-icon.svg" alt="" />
					</SearchIcon>
				</Search>
				<SignOutMobile onClick={() => props.signOut()}>
					<a>Sign Out</a>
				</SignOutMobile>
				<Nav>
					<NavListWrap>
						<NavList className="active">
							<a href="/feed">
								<img src="/images/nav-home.svg" alt="" />
								<span>Home</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-network.svg" alt="" />
								<span>My Network</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-jobs.svg" alt="" />
								<span>Jobs</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-messaging.svg" alt="" />
								<span>Messaging</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-notifications.svg" alt="" />
								<span>Notifications</span>
							</a>
						</NavList>
						<User>
							<a>
								{props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />}
								<span>
									Me <img src="/images/down-icon.svg" alt="" />
								</span>
							</a>
							<SignOut onClick={() => props.signOut()}>
								<a>Sign Out</a>
							</SignOut>
						</User>
						<Work>
							<a>
								<img src="/images/nav-work.svg" alt="" />
								<span>
									Work <img src="/images/down-icon.svg" alt="" />
								</span>
							</a>
						</Work>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	);
}


export default Topbar;
