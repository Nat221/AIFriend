import { Stack, Link, Redirect } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return <Redirect href="/(protected)" />;
  // return (
  //   <>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <ScreenContent path="app/index.tsx" title="Home" />
  //       <Link href={{ pathname: '/details', params: { names: 'Steves' } }} asChild>
  //         <Button title="Show details" />
  //       </Link>
  //     </Container>
  //   </>
  // );
}
