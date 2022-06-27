import { usersfix } from '../datas/usersfix'


function Users(){

    const User = {
		fname: 'Terry', // Récupérer Api 
		lname: 'Medhurst',
		mname: 'Smitham',
		username: 'atuny0',
		email: 'atuny0@sohu.com',
		birthDate: '2000-12-25',
		gender: 'male',
		height: '189',
		weight: '75.4',
		address: '1745 T Street Southeast',
		city: 'Washington',
		postalCode: '20020',
	}


	return ( // Retourner plusieurs tableau tant qu'il reste des utilisateurs
		<div className='boite'>
            <ul className='usersname'>
				{User.fname}<br/>
				{User.lname}<br/>
				({User.mname})<br/>
				<li className='Einfo'>
				{User.username}<br/>
				{User.email}<br/>
				</li>
			</ul>
			<ul className='info'>
				{User.birthDate}<br/>
				{User.gender}<br/>
				{User.height}"cm"{User.weight}"kg"<br/>
			</ul>
			<ul className='address'>
				{User.address}<br/>
				{User.city}<br/>
				{User.city}, {User.postalCode}
			</ul>
		</div>
	)
}

export default Users