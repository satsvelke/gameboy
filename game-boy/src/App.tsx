import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { GenreResult } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: GenreResult | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="{5}">
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                ></PlatformSelector>
              </Box>
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSelectedOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
