import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import ScreenLayout from './screens/ScreenLayout';
import OrderScreen from './components/OrderScreen';
import SupplierScreen from './components/SupplierScreen';
import DashboardContent from './components/DashboardContent';

//MST
import { createHttpClient } from 'mst-gql';
import { RootStore, StoreContext } from '../src/models';

//MockData
import { statusReport, poList } from './data/mockData';

const rootStore = RootStore.create(undefined, {
	gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
});

const App = () => {
	console.log('TEST PUSH');
	return (
		<StoreContext.Provider value={rootStore}>
			<div className="main">
				<ScreenLayout
					DBcontent={<DashboardContent status={statusReport} list={poList} />}
					POcontent={<OrderScreen />}
					SUPcontent={<SupplierScreen />}
					HeaderContent={<UserInfo user="Mark Nabablit" date="February 5, 2020" />}
				></ScreenLayout>
			</div>
		</StoreContext.Provider>
	);
};

export default App;
