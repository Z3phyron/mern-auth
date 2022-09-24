import React from "react";
import {
  Button,
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../features/auth/AuthSlice";

const Index = () => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loc = useLocation();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const links = ["Features", "dash", "Pricings", "Company"];

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand>
        <a href="/">
          <Text b color="inherit" hideIn="xs">
            Auth
          </Text>
        </a>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        {links.map((link, index) => (
          <Navbar.Link
            href={`/${link}`}
            isActive={`/${link}` === loc.pathname}
            key={index}
          >
            {link}
          </Navbar.Link>
        ))}
      </Navbar.Content>

      <Navbar.Content>
        {token ? (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  // color="secondary"
                  size="md"
                  text={
                    !user?.avatr && `${user?.firstName[0]} ${user?.lastName[0]}`
                  }
                  src={
                    user?.avatar &&
                    "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  }
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <NavLink to="/dash">
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {`${user?.firstName} ${user?.lastName}`}
                  </Text>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <p onClick={() => dispatch(SignOut())}>Log Out</p>
                
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
            <Button
              auto
              light
              color="secondary"
              onPress={() => navigate("/sign-in")}
            >
              Sign In
            </Button>
            <Button
              auto
              flat
              rounded
              color="secondary"
              onPress={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </>
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Index;
