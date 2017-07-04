import axios from 'axios';



  export const getData = () => {

      return axios.get('http://localhost:3001/create')
        .then((data,err)=>{
          if(!err) return data;

          console.log(`

              This is the data from the db
              -------------------------------------
              ${data}

            `)
        })

  }

	export const postData = (username,password)=>{
		const posts = {
      username:username,
      password:password
    }
		return axios.post('http://localhost:3001/create', posts).then((response)=>{
			console.log("new response:", response);
		}).catch((err)=>{
			console.log("New error:", err)
		});

	}

