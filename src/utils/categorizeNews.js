export function categorizeNews(stringToCategorize) {
  if (stringToCategorize.includes("sports")) {
    return "Sports";
  } else if (stringToCategorize.includes("business")) {
    return "Business";
  } else if (stringToCategorize.includes("tech")) {
    return "Technology";
  } else if (stringToCategorize.includes("Entertainment")) {
    return "Entertainment";
  } else if (stringToCategorize.includes("kerala")) {
    return "Kerala";
  } else if (stringToCategorize.includes("health")) {
    return "Health";
  } else if (stringToCategorize.includes("auto")) {
    return "Automobile";
  } else if (stringToCategorize.includes("women")) {
    return "Women";
  } else if (stringToCategorize.includes("religion")) {
    return "Religion";
  } else if (stringToCategorize.includes("astro")) {
    return "Astrology";
  } else if (stringToCategorize.includes("money")) {
    return "Money";
  } else if (stringToCategorize.includes("life")) {
    return "Life";
  } else if (stringToCategorize.includes("movies")) {
    return "Movies";
  } else if (stringToCategorize.includes("buzz")) {
    return "Buzz";
  } else if (stringToCategorize.includes("career")) {
    return "Career";
  } else if (stringToCategorize.includes("coronavirus")) {
    return "Corona";
  } else if (stringToCategorize.includes("crime")) {
    return "Crime";
  } else if (stringToCategorize.includes("explained")) {
    return "Explained";
  } else if (stringToCategorize.includes("gulf")) {
    return "Gulf";
  } else if (stringToCategorize.includes("ipl")) {
    return "IPL";
  } else if (stringToCategorize.includes("kerala-bypolls")) {
    return "Kerala ByPolls";
  } else if (stringToCategorize.includes("law")) {
    return "Law";
  } else if (stringToCategorize.includes("money-matters")) {
    return "Money Matters";
  } else if (stringToCategorize.includes("nattu-varthamanam")) {
    return "Nattu Varthamanam";
  } else if (stringToCategorize.includes("opinion")) {
    return "Opinion";
  } else if (stringToCategorize.includes("photos")) {
    return "Photos";
  } else if (stringToCategorize.includes("tv-shows")) {
    return "TV Shows";
  } else if (stringToCategorize.includes("world")) {
    return "World";
  } else if (stringToCategorize.includes("job")) {
    return "Job";
  } else if (stringToCategorize.includes("india")) {
    return "India";
  } else {
    return "Common";
  }
}
