# MiguelTorresValls-GITT-PAT3

![image](https://user-images.githubusercontent.com/97603106/225073660-e9927a5b-d1ef-4846-8a2b-e211ade19d3f.png)

Página web que mejora la anterior añadiendo una página que incluye un "search-bar" para poder buscar repositorios web por nombre de usuario. 
Esto se realiza mediante la API de github: https://api.github.com/users/USERNAME/repos, por lo que accediendo a lo que escriba el usuario en el search bar tenemos acceso a un monton de información sobre sus repositorios.

Ejemplo de resultado al poner en USERNAME el mio propio: migueltorresvalls

![image](https://user-images.githubusercontent.com/97603106/225073005-dc360d54-4a75-4fa6-9a5d-d3ac100345ba.png)

De todas los campos que nos devuelve la API, únicamente se mostrarán "name", "full_name", "owner[avatar_url]", "html_url"
