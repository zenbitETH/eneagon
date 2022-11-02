import { FC } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import styled from "styled-components";

type Visibility = 'always' | 'connected' | 'not_connected'


const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  
`;


const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { isConnected } = useAccount()

	if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

	return (
		<div className='mx-auto'>
			<ConnectKitButton.Custom>

			{({ isConnected, show, truncatedAddress, ensName }) => {
      		  return (
      		    <StyledButton onClick={show}>
      		      {isConnected ? ensName ?? truncatedAddress : "Connect"}
      		    </StyledButton>
      		  );
      		}}

			</ConnectKitButton.Custom>
		</div>
	)
}

export default ConnectWallet
