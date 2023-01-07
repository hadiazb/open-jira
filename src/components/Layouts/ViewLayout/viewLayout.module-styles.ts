import tw, { styled, css } from 'twin.macro';

export interface StyledViewLayoutProps {
	pt?: string;
}

export const StyledSizeCtr = css<StyledViewLayoutProps>`
	padding-top: ${({ pt }) => (pt ? pt : '80px')};
`;

export const StyledViewLayout = styled.div<StyledViewLayoutProps>`
	${tw`py-10 min-h-[400px]`}
	${StyledSizeCtr}
`;
