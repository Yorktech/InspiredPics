<script>
	import { page } from '$app/stores';
	
</script>
<header>
	<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		<a class="navbar-brand" href="https://www.inspiredpics.co.uk">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="../images/1.png" width="64" height="64" />
			InspiredPics
		</a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item ">
					<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="images/1.png" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Main
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="terms.html">FAQ and Terms</a>
						<a class="dropdown-item" href="about.html">About Me</a>
						<a class="dropdown-item" href="support.html">Buy me a coffee</a>
						<a class="dropdown-item" href="promotions.html">Promotions and advertising</a>

					</div>
				</li>




			</ul>
<!--                <a class="" href="#"><i class="fab fa-twitter"></i>Tweet us </a>-->
			<a class="p-3" href="https://www.facebook.com/inspiredpicsuk/"><i class="fab fa-facebook"></i>Like us </a>

		</div>
	</nav>
</header>