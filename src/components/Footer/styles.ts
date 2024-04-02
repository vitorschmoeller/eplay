import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'
export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const Links = styled.ul`
  display: flex;
  font-size: 14px;
`
export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
