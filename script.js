 fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.text()).then((data)=>{
            const blogs = JSON.parse(data);
            const blogsSection = document.getElementById('blogs');
            blogs.forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.className = 'p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200';
                blogDiv.innerHTML = `
                    <h2 class="text-xl font-semibold mb-2 text-slate-900">${blog.title}</h2>
                    <p class="text-slate-500 text-sm">${blog.body}</p>
                `;
                blogsSection.appendChild(blogDiv);
            });
        }).catch((error) => {
            console.error('Error fetching blogs:', error);
        });