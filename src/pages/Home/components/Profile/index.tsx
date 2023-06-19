import { OwnerInformation, Photo, ProfileContainer } from './styles'
import ExternalLinkIcon from '../../../../assets/icons/arrow-up-right-from-square-solid.svg'
import GithubIcon from '../../../../assets/icons/github-brands.svg'
import CompanyIcon from '../../../../assets/icons/building-solid.svg'
import FollowersIcon from '../../../../assets/icons/user-group-solid.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <Photo src="https://github.com/MarcioPezzi92.png" alt="Profile photo" />
      <OwnerInformation>
        <div className="description">
          <div className="header">
            <h1>Marcio</h1>
            <a href="">
              <span>GITHUB</span>
              <img src={ExternalLinkIcon} alt="" />
            </a>
          </div>
          <p>paragragoasad</p>
        </div>
        <div className="footer">
          <div>
            <img src={GithubIcon} alt="Github icon" />
            <span>nickname</span>
          </div>
          <div>
            <img src={CompanyIcon} alt="Github icon" />
            <span>Company</span>
          </div>
          <div>
            <img src={FollowersIcon} alt="Github icon" />
            <span>32 seguidores</span>
          </div>
        </div>
      </OwnerInformation>
    </ProfileContainer>
  )
}
