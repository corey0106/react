import React from 'react';

import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardImage,
  CardSection,
  Div,
  FabulaProvider,
  Icon,
  List,
  ListItem,
  Strong,
  UtilsProvider,
  Tag,
  TagGroup,
  Text,
} from '../lib';

export default {
  title: 'Card',
  component: Card,
};

export const Examples = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div row>
        <Card col="3">
          <CardImage height={200} />
          <CardSection divider="top" padding>
            <Text flex size="lg">
              <Strong mr=".5">Card Title</Strong>
              <Badge color="primary">New</Badge>
            </Text>
            <Text aux block mb="1" size="sm">Card subtitle</Text>
            <Text mb="1">This is some text inside this card. You can add whatever content in here.</Text>
          </CardSection>
          <CardSection divider="top" padding>
            <Button color="primary" expand>Card Button</Button>
          </CardSection>
        </Card>
        <Card col="9">
          <CardImage height={120} />
          <CardSection padding>
            <Text block size="xl" weight="600">Card Title</Text>
            <Text aux block>Card subtitle</Text>
          </CardSection>
          <CardSection>
            <List padding striped>
              <ListItem flex>
                <Div flex flow="v" grow={1}>
                  <Text inline={true} size="lg" weight={600}>
                    <Text mr={.5}>Full-stack Engineer</Text>
                    <Badge color="#E3FFD9">Full-time</Badge>
                  </Text>
                  <Text aux inline={true}>Google</Text>
                </Div>
                <Div alH="end" direction="column" flex>
                  <TagGroup mb={.5}>
                    <Tag>Angular</Tag>
                    <Tag>Engineering</Tag>
                    <Tag>Node</Tag>
                  </TagGroup>

                  <Text alV="center" aux flex={true}>
                    <Icon mr=".5" name="clock" />
                    <span>2 hours</span>
                  </Text>
                </Div>
              </ListItem>

              <ListItem flex>
                <Div flex flow="v" grow={1}>
                  <Text inline={true} size="lg" weight={600}>
                    <Text mr={.5}>Frontend Developer</Text>
                    <Badge color="#FFECD9">Part-time</Badge>
                  </Text>
                  <Text inline={true} aux={true}>Amazon</Text>
                </Div>
                <Div alH="end" direction="column" flex>
                  <TagGroup mb={.5}>
                    <Tag>Angular</Tag>
                    <Tag>Engineering</Tag>
                    <Tag>Node</Tag>
                  </TagGroup>

                  <Text alV="center" aux flex={true}>
                    <Icon mr=".5" name="clock" />
                    <span>2 hours</span>
                  </Text>
                </Div>
              </ListItem>

              <ListItem flex>
                <Div flex flow="v" grow={1}>
                  <Text inline={true} size="lg" weight={600}>
                    <Text mr={.5}>Backend Developer</Text>
                    <Badge color="#FFECD9" mr={.5}>Part-time</Badge>
                    <Badge color="#D9E9FF">Remote</Badge>
                  </Text>
                  <Text aux inline={true}>Netflix</Text>
                </Div>
                <Div alH="end" direction="column" flex>
                  <TagGroup mb={.5}>
                    <Tag>Angular</Tag>
                    <Tag>Engineering</Tag>
                    <Tag>Node</Tag>
                  </TagGroup>

                  <Text alV="center" aux flex={true}>
                    <Icon mr=".5" name="clock" />
                    <span>2 hours</span>
                  </Text>
                </Div>
              </ListItem>
            </List>
          </CardSection>
          <CardSection alH="right" flex padding>
            <ButtonGroup>
              <Button color="primary" wide>Confirm</Button>
              <Button color="light" wide>Cancel</Button>
            </ButtonGroup>
          </CardSection>
        </Card>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="2" row>
        <Card col="3">
          <CardImage height="120" />
          <CardSection padding>
            <Text block size="lg"><strong>Card Title</strong></Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection divider="top" padding>
            <Button color="primary" expand>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="primary">
          <CardImage adaptColor={true} color="primary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="primary" divider="top" padding>
            <Button color="primary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="secondary">
          <CardImage adaptColor={true} color="secondary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="secondary" divider="top" padding>
            <Button color="secondary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="success">
          <CardImage adaptColor={true} color="success" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="success" divider="top" padding>
            <Button color="success" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>

      <Div mb="2" row>
        <Card col="3" color="danger">
          <CardImage adaptColor={true} color="danger" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="danger" divider="top" padding>
            <Button color="danger" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="warning">
          <CardImage adaptColor={true} color="warning" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="warning" divider="top" padding>
            <Button color="warning" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="hot">
          <CardImage adaptColor={true} color="hot" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="hot" divider="top" padding>
            <Button color="hot" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="cold">
          <CardImage adaptColor={true} color="cold" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="cold" divider="top" padding>
            <Button color="cold" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>

      <Div row mb="2">
        <Card col="3" color="dark">
          <CardImage adaptColor={true} color="dark" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="dark" divider="top" padding>
            <Button color="dark" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="light">
          <CardImage adaptColor={true} color="light" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="light" divider="top" padding>
            <Button color="light" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="aux">
          <CardImage adaptColor={true} color="aux" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="aux" divider="top" padding>
            <Button color="aux" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>
    </UtilsProvider>

  </FabulaProvider>
)

export const Glow = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="2" row>
        <Card col="3" glow={true}>
          <CardImage height="120" />
          <CardSection padding>
            <Text block size="lg" strong><strong>Card Title</strong></Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection divider="top" padding>
            <Button color="primary" expand>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="primary" glow={true}>
          <CardImage adaptColor={true} color="primary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="primary" divider="top" padding>
            <Button color="primary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="secondary" glow={true}>
          <CardImage adaptColor={true} color="secondary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="secondary" divider="top" padding>
            <Button color="secondary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="success" glow={true}>
          <CardImage adaptColor={true} color="success" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="success" divider="top" padding>
            <Button color="success" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>

      <Div mb="2" row>
        <Card col="3" color="danger" glow={true}>
          <CardImage adaptColor={true} color="danger" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="danger" divider="top" padding>
            <Button color="danger" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="warning" glow={true}>
          <CardImage adaptColor={true} color="warning" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="warning" divider="top" padding>
            <Button color="warning" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="hot" glow={true}>
          <CardImage adaptColor={true} color="hot" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="hot" divider="top" padding>
            <Button color="hot" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="cold" glow={true}>
          <CardImage adaptColor={true} color="cold" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="cold" divider="top" padding>
            <Button color="cold" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>

      <Div row mb="2">
        <Card col="3" color="dark" glow={true}>
          <CardImage adaptColor={true} color="dark" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="dark" divider="top" padding>
            <Button color="dark" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="light" glow={true}>
          <CardImage adaptColor={true} color="light" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="light" divider="top" padding>
            <Button color="light" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="aux" glow={true}>
          <CardImage adaptColor={true} color="aux" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg"><strong>Card Title</strong></Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="aux" divider="top" padding>
            <Button color="aux" expand invert>Button</Button>
          </CardSection>
        </Card>
      </Div>
    </UtilsProvider>

  </FabulaProvider>
)

export const Layout = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div row>
        <Card col="3">
          <CardImage height={200} />
          <CardSection divider="top" padding>
            <Text flex size="lg">
              <Strong mr=".5">Card Title</Strong>
              <Badge color="primary">New</Badge>
            </Text>
            <Text aux block mb="1" size="sm" span>Card subtitle</Text>
            <Text mb="1">This is some text inside this card. You can add whatever content in here.</Text>
          </CardSection>
          <CardSection divider="top" padding>
            <Button color="primary" expand>Card Button</Button>
          </CardSection>
        </Card>

        <Div col="9">
          <Card layout="h" mb={1}>
            <CardImage width={200} />
            <CardSection grow={1} padding>
              <Text flex size="lg">
                <Strong mr=".5">Card Title</Strong>
                <Badge color="primary">New</Badge>
              </Text>
              <Text aux block mb="1" size="sm" span>Card subtitle</Text>
              <Text>This is some text inside this card. You can add whatever content in here.</Text>
            </CardSection>
            <CardSection padding>
              <Button color="primary" expand>Card Button</Button>
            </CardSection>
          </Card>

          <Card layout="h" mb={1}>
            <CardImage height={300} width={200} />
            <CardSection expand={true}>
              <CardSection expand={true} grow={1} padding>
                <Text flex size="lg">
                  <Strong mr=".5">Card Title</Strong>
                  <Badge color="primary">New</Badge>
                </Text>
                <Text aux block mb="1" size="sm" span>Card subtitle</Text>
                <Text>This is some text inside this card. You can add whatever content in here.</Text>
              </CardSection>

              <CardSection divider="top" padding>
                <Button color="primary" expand>Card Button</Button>
              </CardSection>
            </CardSection>

          </Card>

          <Card layout="h">
            <CardSection grow={1} padding>
              <Text flex size="lg">
                <Strong mr=".5">Card Title</Strong>
                <Badge color="primary">New</Badge>
              </Text>
              <Text aux block mb="1" size="sm" span>Card subtitle</Text>
              <Text>This is some text inside this card. You can add whatever content in here.</Text>
            </CardSection>
            <CardSection padding>
              <Button color="primary">Card Button</Button>
            </CardSection>

            <CardImage />
          </Card>
        </Div>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)