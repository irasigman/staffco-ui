import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
        <Title className={classes.title} ta="center" mt={100}>
            <Text inherit component="span" style={{ fontFamily: 'Newsreader', fontWeight: 300 }}>
                Staff, Co.
            </Text>
        </Title>
        <Text ta="center" mt={10} style={{ fontFamily: 'Newsreader', fontWeight: 300 }}>
            Instantly scalable knowledge workforce for the modern business.
        </Text>
    </>
  );
}
