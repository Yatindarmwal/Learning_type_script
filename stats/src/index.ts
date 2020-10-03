import { MatchResults } from './MatchResult';
import { MatchReader } from './MatchReader';

const matchReader = new MatchReader('football.csv');
matchReader.read();

let manUnitedWins = 0;

for (let match of matchReader.data) {
    if (match[1] == 'Man United' && match[5] == MatchResults.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] == 'Man United' && match[5] == MatchResults.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);