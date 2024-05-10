let filmes = [
                ['Vingadores', 4.5, true, ['Hulk', 33]], 
                ['Mulher Maravilha', 4.8, false, ['Gal Gadot', 25]],
                ['Matrix', 5.0, false, ['Keanu Reaves', 40]]
            ]

            console.table(
                            filmes[1][0], 
                            filmes[1][3][0], 
                            filmes[1][3][1]
                        )
            
            // console.table(
            //     filmes[1]
            // )