source "https://rubygems.org"

# Use GitHub Pages-approved dependencies
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  # `github-pages` already includes jekyll-feed, minima, etc.
  # No need to manually add them again.
end

# Windows and JRuby-specific platform support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
