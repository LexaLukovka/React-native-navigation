import { Navigation } from 'react-native-navigation'
import App from './App'

Navigation.registerComponent('Aleksey_Trainee_App', () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Aleksey_Trainee_App'
      }
    }
  })
})
