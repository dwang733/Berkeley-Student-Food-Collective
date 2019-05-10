[![Maintainability](https://api.codeclimate.com/v1/badges/4f477d37fd3794829697/maintainability)](https://codeclimate.com/github/dwang733/Berkeley-Student-Food-Collective/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4f477d37fd3794829697/test_coverage)](https://codeclimate.com/github/dwang733/Berkeley-Student-Food-Collective/test_coverage)
[![Build Status](https://travis-ci.com/dwang733/Berkeley-Student-Food-Collective.svg?branch=master)](https://travis-ci.com/dwang733/Berkeley-Student-Food-Collective)


# README

## Heroku

http://bsfc.herokuapp.com

## Summary

This app creates a website for the Berkeley Student Food Collective which allows their customers to explore their products and vendors and allows the volunteers to upload products and vendors for the customers to view.

## Overview

The Berkeley Student Food Collective (BSFC) needed a way to better express why they choose specific products and vendors to populate their store with. This website was designed to create a way so they can better explain those choices to their customers. Pages with '/admin' allow volunteers at BSFC to put specific products and vendors on their website. Other pages allow BSFC customers to view those products and vendors.

## Installation

Must have Ruby 2.4.0 to run this project locally. Run bundle install to import all gems.

## Directory Structure

Set up as a standard rails app. Notable choices include:
- All views which are associated with paths prepended with "admin" are in the folder "admin" under views.
- Partials shared among multiple views live in the "application" folder under views.

## Models

The main three models are Vendor, Product, and Tag. Certification, Nutrition, Ownership, and Packaging inherit from Tag and therefore all live in the Tag table in the database with different types. They each have a "belongs to" relationship with either a Vendor or Product model. Product\_Certification, Product\_Nutrition, Product\_Packaging, and Vendor\_Ownership are models linking the two tables they mention.
