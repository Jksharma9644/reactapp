import {Navigation} from 'react-native-navigation';

const startMainTabs =()=>{
    Navigation.startTabBasedApp({
        tabs:[
            {
                screen:"SharePlace",
                label:"Share Place",
                title:"Share Place "
            },
            {
                screen:"FindPlace",
                label:"Find Place",
                title:"Find Place "
            },
        ]
    })
};
export default startMainTabs;

