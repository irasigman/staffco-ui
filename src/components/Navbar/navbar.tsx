import {
  Badge,
  Code,
  Group,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from '@mantine/core';
import classes from './Navbar.module.css';


const links = [
  { label: 'Activity', notifications: 3 },
  { label: 'Tasks', notifications: 4 },
  { label: 'Contacts' },
];


export function NavbarSearch() {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));


  return (
    <nav className={classes.navbar}>

        <Title className={classes.title} ta="center">
            <Text inherit component="span" style={{ fontSize: '24px', fontFamily: 'Newsreader', fontWeight: 300 }}>
                Staff, Co.
            </Text>
        </Title>

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Chats
          </Text>
        </Group>
      </div>
      
    </nav>
  );
}