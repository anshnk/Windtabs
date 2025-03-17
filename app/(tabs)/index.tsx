import * as React from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Link } from 'expo-router'
import "global.css"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';

export default function Home() {
  return (
    <View className='flex-1 justify-center items-center gap-5 p-3 bg-secondary/30'>
      <Card className='w-full max-w-sm p-3 rounded-2xl'>
        <CardHeader>
            <CardTitle className='mb-1'>NativeWind + shadCN (reusables) + Tabs+ Lucide</CardTitle>
            <CardDescription>Press the button to set a goal.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full text-white'>
              <Link href="https://anshnk.dev">
                <Text>My Site!</Text>
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <Text>by ansh</Text>
          </CardFooter>
      </Card>
    </View>
  );
}
