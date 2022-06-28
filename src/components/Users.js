import React, { Component } from 'react'
import User from './User.js'
export default class 
 extends Component {

    state = { // Changement de technique, je n'arrive pas à récupérer les infos de l'api, je choisi donc de tester mon code avec des données fix (copie de l'api)
        users: [
            {
                id:	1,
                firstName:	'Terry',
                lastName:	'Medhurst',
                maidenName:	'Smitham',
                age:	50,
                gender:	'male',
                email:	'atuny0@sohu.com',
                phone:	'+63 791 675 8914',
                username:	'atuny0',
                password:	'9uQFF1Lh',
                birthDate:	'2000-12-25',
                height:	189,
                weight:	75.4,
                address:	'1745 T Street Southeast',
                city:	'Washington',
                postalCode:	'20020',
            },
            {
                id:	2,
                firstName:	'Sheldon',
                lastName:	'Quigley',
                maidenName:	'Cole',
                age:	28,
                gender:	'male',
                email:	'hbingley1@plala.or.jp',
                phone:	'+63 791 675 8914',
                username:	'hbingley1',
                password:	'9uQFF1Lh',
                birthDate:	'2003-08-02',
                height:	187,
                weight:	74,
                address:	'1745 T Street Southeast',
                city:	'Washington',
                postalCode:	'20020',
            },
            {
                id:	3,
                firstName:	'Terril',
                lastName:	'Hills',
                maidenName:	'Hoeger',
                age:	38,
                gender: 'male',
                email:	'rshawe2@51.la',
                phone:	'+63 791 675 8914',
                username:	'rshawe2',
                password:	'9uQFF1Lh',
                birthDate:	'1992-12-30',
                height:	200,
                weight:	105,
                address:    '560 Penstock Drive',
                city:	'Grass Valley',
                postalCode:	'95945',
            }
        ]
    }
  render() {
    return (
      <div>
        {this.state.users.map(user =>(
            <User 
                key={user.id}
                prenom={user.firstName}
                nom={user.lastName}
                maiden={user.maidenName}
                email={user.email}
                username={user.username}
                birthday={user.birthDate}
                gender={user.gender}
                height={user.height}
                weight={user.weight}
                address={user.address}
                city={user.city}
                codepostale={user.postalCode}
            />
        ))}
      </div>
    )
  }
}
