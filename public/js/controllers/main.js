angular.module('produtoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http', 'Produtos', function($scope, $http, Produtos) {
		$scope.produtoForm = {};
		$scope.loading = true;

		Produtos.get()
			.success(function (data ) {
				$scope.produtos = data;
				$scope.loading = false;
		})

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		$scope.createProduto = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.produtoForm != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Produtos.create($scope.produtoForm)

				// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.produtoForm = {}; // clear the form so our user is ready to enter another
						$scope.produtos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};

		$scope.deleteProduto = function(id) {
			$scope.loading = true;

			Produtos.delete(id)
			// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.produtos = data; // assign our new list of todos
				});
		};
	}]);