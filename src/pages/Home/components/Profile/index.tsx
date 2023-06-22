import { OwnerInformation, Photo, ProfileContainer } from './styles'
import ExternalLinkIcon from '../../../../assets/icons/arrow-up-right-from-square-solid.svg'
import GithubIcon from '../../../../assets/icons/github-brands.svg'
import CompanyIcon from '../../../../assets/icons/building-solid.svg'
import FollowersIcon from '../../../../assets/icons/user-group-solid.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ProfileInterface {
  login: string
  name: string
  bio: string
  company: string
  followers: number
}

const username = 'marciopezzi92'

export function Profile() {
  const [profile, setProfile] = useState<ProfileInterface>(
    {} as ProfileInterface,
  )

  const fetchProfile = async () => {
    const res = await axios.get(`http://api.github.com/users/${username}`)
    const { login, name, bio, company, followers } =
      res.data as ProfileInterface
    setProfile({ login, name, bio, company, followers })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <Photo src={`https://github.com/${username}.png`} alt="Profile photo" />
      <OwnerInformation>
        <div className="description">
          <div className="header">
            <h1>{profile.name}</h1>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <img src={ExternalLinkIcon} alt="Ícone para link externo" />
            </a>
          </div>
          <p>{profile.bio}</p>
        </div>
        <div className="footer">
          <div>
            <img src={GithubIcon} alt="Github icon" />
            <span>{profile.login}</span>
          </div>
          <div>
            <img src={CompanyIcon} alt="Github icon" />
            <span>{profile.company}</span>
          </div>
          <div>
            <img src={FollowersIcon} alt="Github icon" />
            <span>{profile.followers} seguidores</span>
          </div>
        </div>
      </OwnerInformation>
    </ProfileContainer>
  )
}
