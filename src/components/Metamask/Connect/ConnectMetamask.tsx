import {observer} from 'mobx-react-lite';
import React from 'react';

import {
	MetamaskButton,
	MetamaskText,
	MetamaskWrap,
} from 'src/components/Metamask/Connect/metamask.styles';
import {useMetamask} from 'src/hooks/metamask.hook';

import metamask_icon from './../../../assets/images/metamask.png';

export const ConnectMetamask = observer(() => {
	const {connectMetamask, metamaskIsConnected, walletIdShrunk} = useMetamask();

	return metamaskIsConnected() ? (
		<MetamaskWrap>
			<img src={metamask_icon} alt="Metamask wallet id" className="top-links__mmicon" width={20} />
			<MetamaskText>{walletIdShrunk}</MetamaskText>
		</MetamaskWrap>
	) : (
		<MetamaskButton onClick={() => connectMetamask()} className="metamask-button">
			<img src={metamask_icon} alt="Metamask wallet id" className="top-links__mmicon" width={20} />
			&nbsp;&nbsp;&nbsp;Connect
		</MetamaskButton>
	);
});
